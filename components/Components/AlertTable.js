import React, { useContext } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { EthersContext } from '@/context/EthersContext';

function AlertTable({ heading, subHeading, alerts }) {
    const { declareAlertResult } = useContext(EthersContext)
    const router = useRouter();

    const handleRowClick = (alertId) => {
        router.push(`/alerts/${alertId}`);
    };
    return (
        <Card>
            <CardHeader>
                <CardTitle>{heading}</CardTitle>
                <CardDescription>{subHeading}</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Created</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Priority</TableHead>
                            <TableHead>Reward</TableHead>
                            <TableHead>Stake</TableHead>
                            <TableHead>Voters</TableHead>
                            <TableHead>Voted</TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {alerts && alerts.map((alert) => (
                            <TableRow
                                key={alert.id}
                                className="cursor-pointer hover:bg-muted/50"
                                onClick={() => handleRowClick(alert.id)}
                            >
                                <TableCell>{alert.id}</TableCell>
                                <TableCell>{new Date(alert.creationTime).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    <Badge variant={alert.status}>
                                        {alert.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={alert.isHighPriority ? "destructive" : "secondary"}>
                                        {alert.isHighPriority ? "High" : "Normal"}
                                    </Badge>
                                </TableCell>
                                <TableCell>{alert.reward} Wie</TableCell>
                                <TableCell>{alert.stake} Wie</TableCell>
                                <TableCell>{alert.votersCount}</TableCell>
                                <TableCell>
                                    <Badge variant={alert.voted ? "success" : "secondary"}>
                                        {alert.voted ? "Yes" : "No"}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default AlertTable